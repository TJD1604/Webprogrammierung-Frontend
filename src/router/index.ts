import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/home/HomeView.vue";
import KontaktView from "@/views/kontakt/KontaktVue.vue";
import ImpressumView from "@/views/impressum/ImpressumView.vue";
import AboutUsView from "@/views/aboutUs/AboutUsView.vue";
import AuszeichnungenView from "@/views/aboutUs/AuszeichnungenView.vue"; 
import DatenschutzView from "@/views/datenschutz/DatenschutzView.vue";
import GeschichteView from "@/views/geschichte/GeschichteView.vue";
import KantinenView from "@/views/kantine/KantinenView.vue";
import AllergeneView from "@/views/kantine/AllergeneView.vue";
import KarriereView from "@/views/karriere/KarriereView.vue";
import JobView from "@/views/karriere/JobView.vue";
import JobDetailsView from "@/views/karriere/JobDetailsView.vue";
import AnreiseView from "@/views/kontakt/AnreiseView.vue";
import MitarbeitendeView from "@/views/mitarbeitende/MitarbeitendeView.vue";
import MitarbeitendeDetailView from "@/views/mitarbeitende/MitarbeitendeDetailView.vue";
import PartnerinnenView from "@/views/partnerinnen/PartnerinnenView.vue";
import PartnerinnenDetailView from "@/views/partnerinnen/PartnerinnenDetailView.vue";
import ProdukteView from "@/views/produkte/ProdukteView.vue";
import ProdukteArtistView from "@/views/produkte/ProdukteArtistView.vue";
import ProdukteDetailView from "@/views/produkte/ProdukteDetailView.vue";
import SpendenprojekteView from "@/views/spendenprojekte/SpendenprojekteView.vue";
import SpendenprojekteDetailView from "@/views/spendenprojekte/SpendenprojekteDetailView.vue";
import WeiterbildungenView from "@/views/weiterbildungen/WeiterbildungenView.vue";
import WeiterbildungenDetailView from "@/views/weiterbildungen/WeiterbildungenDetailView.vue";
import WettbewerbeView from "@/views/wettbewerbe/WettbewerbeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/kontakt",
      name: "kontakt",
      component: KontaktView,
    },
    {
      path: "/impressum",
      name: "impressum",
      component: ImpressumView,
    },
    {
      path: "/aboutUs",
      name: "aboutUs",
      component: AboutUsView,
    },
    {
      path: "/auszeichnungen",
      name: "auszeichnungen",
      component: AuszeichnungenView,
    }, 
    {
      path: "/datenschutz",
      name: "datenschutz",
      component: DatenschutzView,
    },
    {
      path: "/geschichte",
      name: "geschichte",
      component: GeschichteView,
    },
    {
      path: "/kantine",
      name: "kantine",
      component: KantinenView,
    },
    {
      path: "/allergene",
      name: "allergene",
      component: AllergeneView,
    },
    {
      path: "/karriere",
      name: "karriere",
      component: KarriereView,
    },
    {
      path: "/job",
      name: "job",
      component: JobView,
    },
    {
      path: "/job-details",
      name: "job-details",
      component: JobDetailsView,
    },
    {
      path: "/anreise",
      name: "anreise",
      component: AnreiseView,
    },
    {
      path: "/mitarbeitende",
      name: "mitarbeitende",
      component: MitarbeitendeView,
    },
    {
      path: "/mitarbeitende-detail",
      name: "mitarbeitende-detail",
      component: MitarbeitendeDetailView,
    },
    {
      path: "/partnerinnen",
      name: "partnerinnen",
      component: PartnerinnenView,
    },
    {
      path: "/partnerinnen-detail",
      name: "partnerinnen-detail",
      component: PartnerinnenDetailView,
    },
    {
      path: "/produkte",
      name: "produkte",
      component: ProdukteView,
    },
    {
      path: "/produkte-artist",
      name: "produkte-artist",
      component: ProdukteArtistView,
    },
    {
      path: "/produkte-detail",
      name: "produkte-detail",
      component: ProdukteDetailView,
    },
    {
      path: "/spendenprojekte",
      name: "spendenprojekte",
      component: SpendenprojekteView,
    },
    {
      path: "/spendenprojekte-detail",
      name: "spendenprojekte-detail",
      component: SpendenprojekteDetailView,
    },
    {
      path: "/weiterbildungen",
      name: "weiterbildungen",
      component: WeiterbildungenView,
    },
    {
      path: "/weiterbildungen-detail",
      name: "weiterbildungen-detail",
      component: WeiterbildungenDetailView,
    },
    {
      path: "/wettbewerbe",
      name: "wettbewerbe",
      component: WettbewerbeView,
    },
    
  ],
});


export default router;
