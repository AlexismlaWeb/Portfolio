import Behappy from "../images/behappy/cover_behappy.PNG";
import behappy1 from "../images/behappy/behappy1.png";
import behappy2 from "../images/behappy/behappy2.png";
import behappy3 from "../images/behappy/behappy3.png";
import behappy4 from "../images/behappy/behappy4.png";
import behappy5 from "../images/behappy/behappy5.png";
import behappy6 from "../images/behappy/behappy6.png";

import cover_golfapp from "../images/golfapp/cover_golfapp.PNG";
import golfapp1 from "../images/golfapp/golfapp1.png";
import golfapp2 from "../images/golfapp/golfapp2.png";
import golfapp3 from "../images/golfapp/golfapp3.png";
import golfapp4 from "../images/golfapp/golfapp4.png";
import golfapp5 from "../images/golfapp/golfapp5.png";
import golfapp6 from "../images/golfapp/golfapp6.png";

import cover_award from "../images/award/cover_award.PNG";
import award from "../images/award/award.png";

import cover_portfolio from "../images/portfolio/cover_portfolio.PNG";
import portfolio1 from "../images/portfolio/portfolio_resum.png";
import portfolio2 from "../images/portfolio/portfolio_Contact.png";
import portfolio3 from "../images/portfolio/portfolio_project.png";

const projectData = [
  {
    name: "behappy",
    description:
      "Behappy est une application innovante conçue pour égayer votre journée et vous aider à découvrir du contenu audiovisuel qui vous rendra heureux. Que vous soyez un amateur de films, de séries, de musique ou de podcasts, Behappy est votre compagnon idéal pour trouver des recommandations personnalisées et des suggestions aléatoires qui stimuleront votre bien-être. De plus, Behappy vous permet de créer votre propre liste de favoris et de recommandations personnelles. Vous pouvez ajouter vos films préférés, vos séries cultes, vos albums musicaux adorés et vos podcasts inspirants dans votre liste personnelle. Cette fonctionnalité vous permet de garder une trace de tout le contenu qui vous met de bonne humeur et de le partager avec vos amis, votre famille ou même d'autres utilisateurs de Behappy. ",
    technologie: [
      "ReactJs",
      "NodeJs",
      "ExpressJs",
      "Redux",
      "Boostrap",
      "HTML5",
      "CSS",
    ],
    img: [Behappy, behappy1, behappy2, behappy3, behappy4, behappy5, behappy6],
  },
  {
    name: "award 2021",
    description:
      "Bienvenue sur le site Award 2021, la plateforme ultime pour les amateurs de cinéma qui souhaitent participer au processus de vote et honorer les meilleurs films de l'année. Notre site de vote exclusif vous permet de prendre part à cette cérémonie prestigieuse et d'influencer le résultat final en exprimant votre opinion. Sur le site Award 2021, vous trouverez une sélection soigneusement élaborée des meilleurs films de l'année, couvrant une variété de genres, de styles et de thèmes. Des drames captivants aux comédies hilarantes, des films d'action époustouflants aux documentaires engagés, notre liste de nominations représente la diversité et l'excellence de l'industrie cinématographique.",
    technologie: ["ReactJs", "HTML5", "CSS"],
    img: [cover_award, award],
  },
  {
    name: "portfolio",
    description:
      "Bienvenue sur mon portfolio en ligne ! Ici, vous découvrirez mes projets passionnants ainsi que les compétences que j'ai acquises tout au long de mon parcours professionnel. Ce portfolio est conçu pour vous donner un aperçu complet de mon travail, de mes réalisations et de mes capacités. En explorant mon portfolio, vous trouverez une variété de projets dans lesquels j'ai été impliqué. Que ce soit des projets individuels ou des collaborations d'équipe, vous pourrez voir comment j'ai appliqué mes compétences et ma créativité pour résoudre des problèmes et atteindre des objectifs spécifiques. Chaque projet est accompagné d'une description détaillée, mettant en évidence les défis auxquels j'ai été confronté et les solutions que j'ai apportées.",
    technologie: ["ReactJs", "HTML5", "CSS", "Framer-Motion", "FontAwesome"],
    img: [cover_portfolio, portfolio1, portfolio2, portfolio3],
  },
  {
    name: "golfapp",
    description:
      "GolfApp est une application mobile innovante conçue spécialement pour les amateurs de golf passionnés. Cette application offre une expérience complète et pratique pour tous les golfeurs, en les aidant à trouver facilement des terrains de golf à proximité, à réserver des parties, à améliorer leur jeu et à se connecter avec d'autres joueurs.vous pouvez rapidement localiser les terrains de golf les plus proches de votre position actuelle. L'application affiche une liste complète de parcours de golf, avec des détails tels que la distance, les tarifs et les évaluations des utilisateurs. Vous pouvez consulter les caractéristiques de chaque parcours, telles que le nombre de trous, la difficulté et les installations disponibles, pour trouver celui qui correspond le mieux à vos préférences.GolfApp vous permet de réserver facilement votre partie. Vous pouvez sélectionner la date, l'heure et le nombre de joueurs, et l'application confirmera votre réservation. Cela vous permet de planifier vos parties à l'avance et d'assurer votre place sur le parcours. Si vous êtes à la recherche d'un partenaire de jeu ou si vous souhaitez rencontrer de nouveaux joueurs, l'application vous permet de rejoindre des groupes ou des événements locaux. Vous pouvez ainsi organiser des parties avec des inconnus partageant la même passion pour le golf.Une autre caractéristique puissante de GolfApp est la possibilité de suivre vos scores et d'enregistrer vos statistiques. Vous pouvez enregistrer les résultats de vos parties, tenir un registre de vos scores et analyser vos performances au fil du temps.Que vous soyez un golfeur occasionnel à la recherche d'un parcours à proximité pour une partie spontanée, ou un golfeur passionné souhaitant améliorer son jeu et se connecter avec d'autres joueurs, GolfApp est l'application parfaite pour vous accompagner dans votre expérience golfique. Téléchargez l'application dès maintenant et préparez-vous à profiter pleinement de votre passion pour le golf.",
    technologie: ["ReactJs", "HTML5", "CSS", "NodeJs", "ExpressJs", "Mongo DB"],
    img: [
      cover_golfapp,
      golfapp1,
      golfapp2,
      golfapp3,
      golfapp4,
      golfapp5,
      golfapp6,
    ],
  },
];

export default projectData;
