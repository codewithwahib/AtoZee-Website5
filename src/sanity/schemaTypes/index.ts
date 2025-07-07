// schema.ts

import { type SchemaTypeDefinition } from 'sanity'

import { blockContent } from './blockContent'
import { lowvoltageswitchgearpanels } from './lowvoltageswitchgearpanels'
// import { lowvoltageswitchgearpanelsdistributionboards } from './lowvoltageswitchgeardistributionboards'
import { mediumvoltageswitchgear } from './mediumvoltageswitchgear'
// import { stainlesssteelstrcuture } from './stainlesssteelstrcuture'
// import { emptyenclosure } from './emptyenclosure'
import { typetestedpanels } from './typetestedpanels'
import { cable1 } from './cable'
import { career } from './career'
import { hero } from './hero'
import { hero2 } from './hero2'
import { hero3 } from './hero3'
import { hero4 } from './hero4'
import { hero5 } from './hero5'
// import homeproduct from './mainp'
import { ad } from './ad'
import { pureImage } from './ourclients'
import { abouthome1 } from './abouthome1'
import { abouthome2 } from './abouthome2'
import { abouthome3 } from './abouthome3'
import { abouthome4 } from './abouthome4'
import { abouthome5 } from './abouthome5'
import {news} from '@/sanity/schemaTypes/news'
import { newsimage } from './newsimage'





export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContent,
    hero,
    hero2,
    hero3,
    hero4,
    hero5,
    career,
    // homeproduct,
    lowvoltageswitchgearpanels,
    // lowvoltageswitchgearpanelsdistributionboards,
    mediumvoltageswitchgear,
    // stainlesssteelstrcuture,
    typetestedpanels,
    cable1,
    ad,
    pureImage,
    abouthome1,   
    abouthome2,  
    abouthome3,  
    abouthome4,  
    abouthome5,
    news, 
    newsimage, 
    // cabletraysandladder,
  ],
}
