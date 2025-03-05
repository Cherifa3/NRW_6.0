import { Component } from '@angular/core';

@Component({
  selector: 'app-oc-team',
  templateUrl: './oc-team.component.html',
  styleUrl: './oc-team.component.scss'
})
export class OcTeamComponent {
  
  heads = [
    { firstName: 'Ghada' , lastName: 'Daghmoura', role: 'Project Manager', imageSrc: '../../assets/ghada-daghmoura.jpg' },
    { firstName: 'Abir' , lastName: ' bel haj ammar', role: 'Head of External Relations & Sponsoring', imageSrc: '../../assets/abir-haj-ammar.jpg' },
    { firstName: 'Eya' , lastName: ' Karoui', role: 'Head of Administrative Affairs', imageSrc: '../../assets/eya-karoui.jpg' },
    { firstName: 'Yassine' , lastName: ' Najar', role: 'Head of Technical', imageSrc: '../../assets/yassine-najjar.jpg' },
    { firstName: 'Wahib' , lastName: ' ben marzouk', role: 'Head of Branding', imageSrc: '../../assets/wahib-ben-marzouk.jpg' },
    { firstName: 'Cherifa' , lastName: ' Chaouch', role: 'Head of IT Department', imageSrc: '../../assets/cherifa-chaouech.jpg' },
    { firstName: 'Rayhane' , lastName: ' Sahli', role: 'Head of Organization', imageSrc: '../../assets/ryhane-sahli.jpg' }
  ];

  managers = [
    { firstName: 'Amal' , lastName: 'Bahloul', role: 'External Relations & Sponsoring', imageSrc: '../../assets/bahloul-amal.jpg' },
    { firstName: 'Ahmed' , lastName: 'ksibi', role: 'External Relations & Sponsoring', imageSrc: '../../assets/ahmed-ksibi.jpg' },
    { firstName: 'Farouk' , lastName: 'Thabet', role: 'External Relations & Sponsoring', imageSrc: '../../assets/farouk-thabet.jpg' },
    { firstName: 'Mohamed' , lastName: '  Amine Laouini', role: 'External Relations & Sponsoring', imageSrc: '../../assets/med-amine-laouini.jpg' },
    { firstName: 'Sinda' , lastName: 'Ferchichi', role: 'External Relations & Sponsoring', imageSrc: '../../assets/sinda-ferchichi.jpg' },
    { firstName: 'Yassmine' , lastName: ' Bessaad', role: 'Administrative Affairs', imageSrc: '../../assets/yassmine-bessad.jpg' },
    { firstName: 'Emna' , lastName: ' Jridi', role: 'Administrative Affairs ', imageSrc: '../../assets/emna-jridi.jpg' },
    { firstName: 'Rayen' , lastName: 'Mrad', role: 'Administrative Affairs', imageSrc: '../../assets/mrad-rayen.jpg' },
    { firstName: 'Mokhtar' , lastName: ' Ben Jomaa', role: 'organization ', imageSrc: '../../assets/mokhtar-ben-jomaa.jpg' },
    { firstName: 'Youssef' , lastName: ' Bjaoui', role: 'organization ', imageSrc: '../../assets/youssef-bjaoui.JPG' },
    { firstName: 'Tasnim' , lastName: ' Daly', role: 'organization ', imageSrc: '../../assets/test-pict.png' },
    { firstName: 'Mohammed Youssef' , lastName: ' Laabidi', role: 'organization ', imageSrc: '../../assets/mohamed-youssef-laabidi.jpg' },
    { firstName: 'Ichraf' , lastName: ' Besbes', role: 'organization ', imageSrc: '../../assets/ichraf-besbes.jpg' },
    { firstName: 'Ghada' , lastName: ' Bouabidi', role: 'Branding ', imageSrc: '../../assets/ghada-bouabidi.jpg' },
    { firstName: 'mohamed amine' , lastName: 'ahmadi', role: 'IT', imageSrc: '../../assets/ahmadi-mohamed-amine.jpg' },
    { firstName: 'Mlake' , lastName: 'hamzaoui', role: 'Branding', imageSrc: '../../assets/malek-hamzaoui.jpg' },
    { firstName: 'Youssef' , lastName: 'Guiga', role: 'IT', imageSrc: '../../assets/youssef-guiga.jpg' },
    { firstName: 'Skander' , lastName: 'Gritli', role: 'IT', imageSrc: '../../assets/skander-gritli.jpg' },
    { firstName: 'Fares' , lastName: ' Atoui', role: 'TECHNICAL ', imageSrc: '../../assets/fares-atoui.jpg' },
    { firstName: 'Chahd' , lastName: 'Jedidi', role: 'TECHNICAL', imageSrc: '../../assets/test-pict.png' },
    { firstName: 'Fedy' , lastName: 'Ben Hassouna', role: 'TECHNICAL', imageSrc: '../../assets/fedy-benhassouna.jpg' },

  ];
}
