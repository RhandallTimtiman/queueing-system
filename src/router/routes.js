
const routes = [
  {
    path: '/',
    component: () => import('layouts/Patient/PatientLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Patient/PatientLanding.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
