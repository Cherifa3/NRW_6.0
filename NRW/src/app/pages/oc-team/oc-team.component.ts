import { Component } from '@angular/core';

@Component({
  selector: 'app-oc-team',
  templateUrl: './oc-team.component.html',
  styleUrl: './oc-team.component.scss'
})
export class OcTeamComponent {
  
  heads = [
    { firstName: 'Ghada' , lastName: 'Daghmoura', role: 'Congress Chair', imageSrc: '../../assets/oc-members/ghada-daghmoura.webp' },
    { firstName: 'Abir' , lastName: ' bel haj ammar', role: 'Head of External Relations & Sponsoring', imageSrc: '../../assets/oc-members/abir-haj-ammar.webp' },
    { firstName: 'Eya' , lastName: ' Karoui', role: 'Head of Administrative Affairs', imageSrc: '../../assets/oc-members/eya-karoui.webp' },
    { firstName: 'Yassine' , lastName: ' Najar', role: 'Head of Technical', imageSrc: '../../assets/oc-members/yassine-najjar.webp' },
    { firstName: 'Wahib' , lastName: ' ben marzouk', role: 'Head of Branding', imageSrc: '../../assets/oc-members/wahib-ben-marzouk.webp' },
    { firstName: 'Cherifa' , lastName: ' Chaouch', role: 'Head of IT Department', imageSrc: '../../assets/oc-members/cherifa-chaouch.webp' },
    { firstName: 'Rayhane' , lastName: ' Sahli', role: 'Head of Organization', imageSrc: '../../assets/oc-members/ryhane-sahli.webp' }
  ];

  managers = [
    { firstName: 'Amal' , lastName: 'Bahloul', role: 'External Relations & Sponsoring', imageSrc: '../../assets/oc-members/bahloul-amal.webp' },
    { firstName: 'Ahmed' , lastName: 'ksibi', role: 'External Relations & Sponsoring', imageSrc: '../../assets/oc-members/ahmed-ksibi.webp' },
    { firstName: 'Farouk' , lastName: 'Thabet', role: 'External Relations & Sponsoring', imageSrc: '../../assets/oc-members/farouk-thabet.webp' },
    { firstName: 'Mohamed' , lastName: '  Amine Laouini', role: 'External Relations & Sponsoring', imageSrc: '../../assets/oc-members/med-amine-laouini.webp' },
    { firstName: 'Sinda' , lastName: 'Ferchichi', role: 'External Relations & Sponsoring', imageSrc: '../../assets/oc-members/sinda-ferchichi.webp' },
    { firstName: 'Yassmine' , lastName: ' Bessaad', role: 'Administrative Affairs', imageSrc: '../../assets/oc-members/yassmine-bessad.webp' },
    { firstName: 'Emna' , lastName: ' Jridi', role: 'Administrative Affairs ', imageSrc: '../../assets/oc-members/emna-jridi.webp' },
    { firstName: 'Rayen' , lastName: 'Mrad', role: 'Administrative Affairs', imageSrc: '../../assets/oc-members/mrad-rayen.webp' },
    { firstName: 'Mokhtar' , lastName: ' Ben Jomaa', role: 'organization ', imageSrc: '../../assets/oc-members/mokhtar-ben-jomaa.webp' },
    { firstName: 'Youssef' , lastName: ' Bjaoui', role: 'organization ', imageSrc: '../../assets/oc-members/youssef-bjaoui.webp' },
    { firstName: 'Tasnim' , lastName: ' Daly', role: 'organization ', imageSrc: '../../assets/test-pict.png' },
    { firstName: 'Mohammed Youssef' , lastName: ' Laabidi', role: 'organization ', imageSrc: '../../assets/oc-members/mohamed-youssef-laabidi.webp' },
    { firstName: 'Ichraf' , lastName: ' Besbes', role: 'organization ', imageSrc: '../../assets/oc-members/ichraf-besbes.webp' },
    { firstName: 'Ghada' , lastName: ' Bouabidi', role: 'Branding ', imageSrc: '../../assets/oc-members/ghada-bouabidi.webp' },
    { firstName: 'mohamed amine' , lastName: 'ahmadi', role: 'IT', imageSrc: '../../assets/oc-members/ahmadi-mohamed-amine.webp' },
    { firstName: 'Mlake' , lastName: 'hamzaoui', role: 'Branding', imageSrc: '../../assets/oc-members/malek-hamzaoui.webp' },
    { firstName: 'Youssef' , lastName: 'Guiga', role: 'IT', imageSrc: '../../assets/oc-members/youssef-guiga.webp' },
    { firstName: 'Fedy' , lastName: 'Ben Hassouna', role: 'TECHNICAL', imageSrc: '../../assets/oc-members/fedy-benhassouna.webp' },
    { firstName: 'Skander' , lastName: 'Gritli', role: 'IT', imageSrc: '../../assets/oc-members/skander-gritli.webp' },
    { firstName: 'Fares' , lastName: ' Atoui', role: 'TECHNICAL ', imageSrc: '../../assets/oc-members/fares-atoui.webp' },
    { firstName: 'Chahd' , lastName: 'Jedidi', role: 'TECHNICAL', imageSrc: '../../assets/test-pict.png' },

  ];
}
