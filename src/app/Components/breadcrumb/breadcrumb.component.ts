import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';

interface Breadcrumb {
  label: string;
  url: string;
}

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
})
export class BreadcrumbComponent implements OnInit {
  breadcrumbs: Breadcrumb[] = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.buildBreadcrumbs(this.activatedRoute.root))
      )
      .subscribe((breadcrumbs) => {
        this.breadcrumbs = breadcrumbs;
      });
  }

  private buildBreadcrumbs(
    route: ActivatedRoute,
    url: string = '',
    breadcrumbs: Breadcrumb[] = []
  ): Breadcrumb[] {
    const label = route.routeConfig
      ? route.routeConfig.data?.['breadcrumb']
      : '';
    const path = route.routeConfig ? route.routeConfig.path : '';

    const nextUrl = `${url}${path}/`;

    const breadcrumb = {
      label,
      url: nextUrl,
    };

    const newBreadcrumbs = label
      ? [...breadcrumbs, breadcrumb]
      : [...breadcrumbs];

    if (route.firstChild) {
      return this.buildBreadcrumbs(route.firstChild, nextUrl, newBreadcrumbs);
    }

    return newBreadcrumbs;
  }
}
