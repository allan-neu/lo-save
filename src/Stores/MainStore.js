import { EventEmitter } from "events";
import dispatcher from '../dispatcher.js';
import axios from 'axios'
import glas from '../Images/riverClyde.jpg'
import manc from '../Images/manchester.jpg'
import edin from '../Images/edin.jpg'
import coneheid from '../Images/coneheid.jpg'
import autism from '../Images/autism.jpg'


class MainStore extends EventEmitter {
	constructor() {
		super();
		this.state = {
			cities: [
				{
					name: 'Glasgow',
					img: glas
				},
				{
					name: 'Manchester',
					img: manc
				},
				{
					name: 'Edinburgh',
					img: edin
				}
			],
			articles: [
				{	
					city: 'Glasgow',
					mainImg: {img: autism, caption: 'Photo: Victoria Wilkinson Brownless/Getty'},
					headline: 'New Public Square in West End',
					text: 'Edinburgh has the Castle. London has Big Ben. And Glasgow? Well, Glasgow has a statue with a traffic cone on its head. \n\nThere are few more iconic images of Glasgow than that of the Duke of Wellington on horseback, with a bright orange cone perched neatly on his head. \n\nIn 2011 the ‘Coneheid’ statue was named by Lonely Planet as one of the top ten most bizarre monuments on Earth, but why is it such an important symbol of Glasgow and its people? \n\nA brief history of a strange statue \n\nArthur Wellesley, 1st Duke of Wellington was best known for defeating Napoleon at the Battle of Waterloo (as well as giving his name to the wellington boot) and statues honouring this military hero can be found all across Britain. \n\nThe Glasgow version was designed by Italian sculptor Carlo Marochetti and was erected in 1844. \n\nFor the best part of 140 years, the statue stood on Royal Exchange Square without much fanfare. \n\nThat all changed in the early 1980s, when a traffic cone mysteriously started appearing on top of the Duke of Wellington’s head. \n\nThe origins of this practice are murky, but the most widely held belief is that a brave, drunk student scaled the statue after a night out in order to adorn the Duke with his new accessory. Despite attempts at removal by Glasgow City Council, the cone has remained for over 30 years. Whenever a cone is removed, it is only a matter of days before a new one appears in its place. The cone controversy As this tribute to Wellington is an A-listed statue on top of a three foot plinth, it’s no surprise that Glasgow City Council and Police Scotland discouraged the tradition to avoid damage and injury. In 2013, the council proposed a scheme to double the height of the plinth in order to deter intrepid cone fans. The immediate backlash from the Glaswegian public, however, showed that the practice was not widely considered an act of vandalism, but rather a representation of local culture. Within 24 hours, a ‘Keep the Cone’ Facebook page had accumulated over 72,000 fans who united in opposition of the council’s plans.',
					id: '1',
					moreImages: [coneheid, coneheid]
				},
				{
					city: 'Glasgow',
					mainImg: {img: coneheid, caption: 'Photo: Victoria Wilkinson Brownless/Getty'},
					headline: 'New Public Square in West End',
					text: 'Edinburgh has the Castle. London has Big Ben. And Glasgow? Well, Glasgow has a statue with a traffic cone on its head. \n\nThere are few more iconic images of Glasgow than that of the Duke of Wellington on horseback, with a bright orange cone perched neatly on his head. \n\nIn 2011 the ‘Coneheid’ statue was named by Lonely Planet as one of the top ten most bizarre monuments on Earth, but why is it such an important symbol of Glasgow and its people? \n\nA brief history of a strange statue \n\nArthur Wellesley, 1st Duke of Wellington was best known for defeating Napoleon at the Battle of Waterloo (as well as giving his name to the wellington boot) and statues honouring this military hero can be found all across Britain. \n\nThe Glasgow version was designed by Italian sculptor Carlo Marochetti and was erected in 1844. \n\nFor the best part of 140 years, the statue stood on Royal Exchange Square without much fanfare. \n\nThat all changed in the early 1980s, when a traffic cone mysteriously started appearing on top of the Duke of Wellington’s head. \n\nThe origins of this practice are murky, but the most widely held belief is that a brave, drunk student scaled the statue after a night out in order to adorn the Duke with his new accessory. Despite attempts at removal by Glasgow City Council, the cone has remained for over 30 years. Whenever a cone is removed, it is only a matter of days before a new one appears in its place. The cone controversy As this tribute to Wellington is an A-listed statue on top of a three foot plinth, it’s no surprise that Glasgow City Council and Police Scotland discouraged the tradition to avoid damage and injury. In 2013, the council proposed a scheme to double the height of the plinth in order to deter intrepid cone fans. The immediate backlash from the Glaswegian public, however, showed that the practice was not widely considered an act of vandalism, but rather a representation of local culture. Within 24 hours, a ‘Keep the Cone’ Facebook page had accumulated over 72,000 fans who united in opposition of the council’s plans.',
					id: '2',
					moreImages: [coneheid, coneheid]
				},
				{
					city: 'Glasgow',
					mainImg: {img: coneheid, caption: 'Photo: Victoria Wilkinson Brownless/Getty'},
					headline: 'New Public Square in West End',
					text: 'Edinburgh has the Castle. London has Big Ben. And Glasgow? Well, Glasgow has a statue with a traffic cone on its head. \n\nThere are few more iconic images of Glasgow than that of the Duke of Wellington on horseback, with a bright orange cone perched neatly on his head. \n\nIn 2011 the ‘Coneheid’ statue was named by Lonely Planet as one of the top ten most bizarre monuments on Earth, but why is it such an important symbol of Glasgow and its people? \n\nA brief history of a strange statue \n\nArthur Wellesley, 1st Duke of Wellington was best known for defeating Napoleon at the Battle of Waterloo (as well as giving his name to the wellington boot) and statues honouring this military hero can be found all across Britain. \n\nThe Glasgow version was designed by Italian sculptor Carlo Marochetti and was erected in 1844. \n\nFor the best part of 140 years, the statue stood on Royal Exchange Square without much fanfare. \n\nThat all changed in the early 1980s, when a traffic cone mysteriously started appearing on top of the Duke of Wellington’s head. \n\nThe origins of this practice are murky, but the most widely held belief is that a brave, drunk student scaled the statue after a night out in order to adorn the Duke with his new accessory. Despite attempts at removal by Glasgow City Council, the cone has remained for over 30 years. Whenever a cone is removed, it is only a matter of days before a new one appears in its place. The cone controversy As this tribute to Wellington is an A-listed statue on top of a three foot plinth, it’s no surprise that Glasgow City Council and Police Scotland discouraged the tradition to avoid damage and injury. In 2013, the council proposed a scheme to double the height of the plinth in order to deter intrepid cone fans. The immediate backlash from the Glaswegian public, however, showed that the practice was not widely considered an act of vandalism, but rather a representation of local culture. Within 24 hours, a ‘Keep the Cone’ Facebook page had accumulated over 72,000 fans who united in opposition of the council’s plans.',
					id: '3',
					moreImages: [coneheid, coneheid]
				},
				{
					city: 'Glasgow',
					mainImg: {img: coneheid, caption: 'Photo: Victoria Wilkinson Brownless/Getty'},
					headline: 'New Public Square in West End',
					text: 'Edinburgh has the Castle. London has Big Ben. And Glasgow? Well, Glasgow has a statue with a traffic cone on its head. \n\nThere are few more iconic images of Glasgow than that of the Duke of Wellington on horseback, with a bright orange cone perched neatly on his head. \n\nIn 2011 the ‘Coneheid’ statue was named by Lonely Planet as one of the top ten most bizarre monuments on Earth, but why is it such an important symbol of Glasgow and its people? \n\nA brief history of a strange statue \n\nArthur Wellesley, 1st Duke of Wellington was best known for defeating Napoleon at the Battle of Waterloo (as well as giving his name to the wellington boot) and statues honouring this military hero can be found all across Britain. \n\nThe Glasgow version was designed by Italian sculptor Carlo Marochetti and was erected in 1844. \n\nFor the best part of 140 years, the statue stood on Royal Exchange Square without much fanfare. \n\nThat all changed in the early 1980s, when a traffic cone mysteriously started appearing on top of the Duke of Wellington’s head. \n\nThe origins of this practice are murky, but the most widely held belief is that a brave, drunk student scaled the statue after a night out in order to adorn the Duke with his new accessory. Despite attempts at removal by Glasgow City Council, the cone has remained for over 30 years. Whenever a cone is removed, it is only a matter of days before a new one appears in its place. The cone controversy As this tribute to Wellington is an A-listed statue on top of a three foot plinth, it’s no surprise that Glasgow City Council and Police Scotland discouraged the tradition to avoid damage and injury. In 2013, the council proposed a scheme to double the height of the plinth in order to deter intrepid cone fans. The immediate backlash from the Glaswegian public, however, showed that the practice was not widely considered an act of vandalism, but rather a representation of local culture. Within 24 hours, a ‘Keep the Cone’ Facebook page had accumulated over 72,000 fans who united in opposition of the council’s plans.',
					id: '4',
					moreImages: [coneheid, coneheid]
				},
				{
					city: 'Glasgow',
					mainImg: {img: coneheid, caption: 'Photo: Victoria Wilkinson Brownless/Getty'},
					headline: 'New Public Square in West End',
					text: 'Edinburgh has the Castle. London has Big Ben. And Glasgow? Well, Glasgow has a statue with a traffic cone on its head. \n\nThere are few more iconic images of Glasgow than that of the Duke of Wellington on horseback, with a bright orange cone perched neatly on his head. \n\nIn 2011 the ‘Coneheid’ statue was named by Lonely Planet as one of the top ten most bizarre monuments on Earth, but why is it such an important symbol of Glasgow and its people? \n\nA brief history of a strange statue \n\nArthur Wellesley, 1st Duke of Wellington was best known for defeating Napoleon at the Battle of Waterloo (as well as giving his name to the wellington boot) and statues honouring this military hero can be found all across Britain. \n\nThe Glasgow version was designed by Italian sculptor Carlo Marochetti and was erected in 1844. \n\nFor the best part of 140 years, the statue stood on Royal Exchange Square without much fanfare. \n\nThat all changed in the early 1980s, when a traffic cone mysteriously started appearing on top of the Duke of Wellington’s head. \n\nThe origins of this practice are murky, but the most widely held belief is that a brave, drunk student scaled the statue after a night out in order to adorn the Duke with his new accessory. Despite attempts at removal by Glasgow City Council, the cone has remained for over 30 years. Whenever a cone is removed, it is only a matter of days before a new one appears in its place. The cone controversy As this tribute to Wellington is an A-listed statue on top of a three foot plinth, it’s no surprise that Glasgow City Council and Police Scotland discouraged the tradition to avoid damage and injury. In 2013, the council proposed a scheme to double the height of the plinth in order to deter intrepid cone fans. The immediate backlash from the Glaswegian public, however, showed that the practice was not widely considered an act of vandalism, but rather a representation of local culture. Within 24 hours, a ‘Keep the Cone’ Facebook page had accumulated over 72,000 fans who united in opposition of the council’s plans.',
					id: '5',
					moreImages: [coneheid, coneheid]
				},

			]
		}
	}

	hydrate() {
		
	}

	

	handleActions() {

	}


}

const mainStore = new MainStore;

dispatcher.register(mainStore.handleActions.bind(mainStore));

export default mainStore;