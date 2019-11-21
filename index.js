import { addContentRoute } from "@factor/tools";

addContentRoute({
  path: "/",
  component: () => import("./v-home.vue")
});

addContentRoute({
  path: "/page",
  component: () => import("./v-page.vue")
});
