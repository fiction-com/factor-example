import { addContentRoute } from "@factor/api";

addContentRoute({
  path: "/",
  component: () => import("./view-home.vue")
});

addContentRoute({
  path: "/page",
  component: () => import("./view-page.vue")
});
