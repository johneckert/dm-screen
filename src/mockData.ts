import { CardType } from './interfaces';

export const mockCardData = [
  {
    id: 'X-1',
    content: { title: 'Pikachu', content: 'Pickachu is a yellow pokemon' },
    column: `droppable-1`,
    type: CardType.Note,
    tab: 'tab-1',
  },
  {
    id: 'X-2',
    content: { title: 'Charmander', content: 'Charmander is a fire pokemon' },
    column: `droppable-2`,
    type: CardType.Note,
    tab: 'tab-1',
  },
  {
    id: 'X-3',
    content: { title: 'Squirtle', content: 'Squirtle is a water pokemon' },
    column: `droppable-3`,
    type: CardType.Note,
    tab: 'tab-1',
  },
];

export const mockCardDataMap = {
  'droppable-1': [
    {
      id: 'X-1',
      content: { title: 'Pikachu', content: 'Pickachu is a yellow pokemon' },
      column: `droppable-1`,
      type: CardType.Note,
      tab: 'tab-1',
    },
  ],
  'droppable-2': [
    {
      id: 'X-2',
      content: { title: 'Charmander', content: 'Charmander is a fire pokemon' },
      column: `droppable-2`,
      type: CardType.Note,
      tab: 'tab-1',
    },
  ],
  'droppable-3': [
    {
      id: 'X-3',
      content: { title: 'Squirtle', content: 'Squirtle is a water pokemon' },
      column: `droppable-3`,
      type: CardType.Note,
      tab: 'tab-1',
    },
  ],
  'droppable-4': [],
};

export const mockSaveData = `[{"id":"welcome-1","content":{"title":"Welcome to the DM Screen!","notes":"This is a digital DM screen for D&D 5e. It is designed to be used while DM-ing games online."},"column":"droppable-1","tab":"welcome-info","type":"Note"},{"id":"c737d5d2-1512-41c5-801a-764fed204f5e","content":{"title":"conditions"},"type":"Rule","column":"droppable-1","tab":"welcome-info"},{"id":"0edaaefd-ddde-4dea-bc72-85a8406db97c","content":{"title":"Blink Dog","size":"Medium","type":"Fey","alignment":"lawful good","hitDice":"4d8+4","hp":22,"ac":13,"strength":12,"dexterity":17,"constitution":12,"intelligence":10,"wisdom":13,"charisma":11,"speed":"walk: 40ft.","proficiencies":"perception: 3ft., stealth: 5ft.","vulnerabilities":"","resistances":"","damageImmunities":"","conditionImmunities":"","senses":"passive Perception 10","challengeRating":"1/4","specialAbilities":"### Keen Hearing and Smell: \\n The dog has advantage on Wisdom (Perception) checks that rely on hearing or smell. \\n","actions":"### Bite: \\n Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) piercing damage. \\n\\n### Teleport (Recharge 4-6): \\n The dog magically teleports, along with any equipment it is wearing or carrying, up to 40 ft. to an unoccupied space it can see. Before or after teleporting, the dog can make one bite attack. \\n","legendaryActions":"","image":null,"languages":"Blink Dog, understands Sylvan but can't speak it","description":"A **blink dog** takes its name from its ability to blink in and out of existence, a talent it uses to aid its attacks and to avoid harm."},"type":"Monster","column":"droppable-2","tab":"welcome-info"},{"id":"8726cf53-65c6-4da4-b2a8-a9ba32a87631","content":{"title":"Boblin","hp":"10","ac":"12","charClass":"Fighter","charLevel":"2","charRace":"Goblin","charBackground":"Criminal","passivePerception":"12","passiveStealth":"15","passiveInsight":"10","speed":"30","spellCastingAbility":"INT","spellCastingModifier":"+2","spellSaveDC":"10","spellAttackBonus":"+2","languages":"Goblin, Common","link":"www.google.com","notes":"Some shit about the character"},"type":"Player","column":"droppable-2","tab":"welcome-info"},{"id":"4f7e8379-f559-43db-9bcf-5af3ee8fb93c","content":{"title":"Ankheg","size":"Large","type":"Monstrosity","alignment":"unaligned","hitDice":"6d10+6","hp":39,"ac":14,"strength":17,"dexterity":11,"constitution":13,"intelligence":1,"wisdom":13,"charisma":6,"speed":"walk: 30ft., burrow: 10ft.","proficiencies":"","vulnerabilities":"","resistances":"","damageImmunities":"","conditionImmunities":"","senses":"darkvision 60 ft., tremorsense 60 ft., passive Perception 11","challengeRating":"2","specialAbilities":"","actions":"### Bite: \\n Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) slashing damage plus 3 (1d6) acid damage. If the target is a Large or smaller creature, it is grappled (escape DC 13). Until this grapple ends, the ankheg can bite only the grappled creature and has advantage on attack rolls to do so. \\n\\n### Acid Spray (Recharge 6): \\n The ankheg spits acid in a line that is 30 ft. long and 5 ft. wide, provided that it has no creature grappled. Each creature in that line must make a DC 13 Dexterity saving throw, taking 10 (3d6) acid damage on a failed save, or half as much damage on a successful one. \\n","legendaryActions":"","image":"http://api.open5e.com/static/img/monsters/ankheg.png","languages":"","description":""},"type":"Monster","column":"droppable-2","tab":"welcome-info"},{"id":"4e1117dd-699a-4534-8255-c8480efe03b4","content":{"title":"strength"},"type":"Rule","column":"droppable-3","tab":"welcome-info"},{"id":"2ed216cf-7707-48b2-80b7-90973ed2ad01","content":{"title":"Room","roomNumber":"X1","readOutLoudText":"This is the stuff in the room. ekhndfghrtlhdfkvamsdlvz,?V/df,lsdb;dfbd;bkerfb\\nThis is the stuff in the room. ekhndfghrtlhdfkvamsdlvz,?V/df,lsdb;dfbd;bkerfb\\nThis is the stuff in the room. ekhndfghrtlhdfkvamsdlvz,?V/df,lsdb;dfbd;bkerfbThis is the stuff in the room. ekhndfghrtlhdfkvamsdlvz,?V/df,lsdb;dfbd;bkerfbThis is the stuff in the room. ekhndfghrtlhdfkvamsdlvz,?V/df,lsdb;dfbd;bkerfbThis is the stuff in the room. ekhndfghrtlhdfkvamsdlvz,?V/df,lsdb;dfbd;bkerfbThis is the stuff in the room. ekhndfghrtlhdfkvamsdlvz,?V/df,lsdb;dfbd;bkerfbThis is the stuff in the room. ekhndfghrtlhdfkvamsdlvz,?V/df,lsdb;dfbd;bkerfbThis is the stuff in the room. ekhndfghrtlhdfkvamsdlvz,?V/df,lsdb;dfbd;bkerfbThis is the stuff in the room. ekhndfghrtlhdfkvamsdlvz,?V/df,lsdb;dfbd;bkerfbThis is the stuff in the room. ekhndfghrtlhdfkvamsdlvz,?V/df,lsdb;dfbd;bkerfbThis is the stuff in the room. ekhndfghrtlhdfkvamsdlvz,?V/df,lsdb;dfbd;bkerfbThis is the stuff in the room. ekhndfghrtlhdfkvamsdlvz,?V/df,lsdb;dfbd;bkerfbThis is the stuff in the room. ekhndfghrtlhdfkvamsdlvz,?V/df,lsdb;dfbd;bkerfbThis is the stuff in the room. ekhndfghrtlhdfkvamsdlvz,?V/df,lsdb;dfbd;bkerfbThis is the stuff in the room. ekhndfghrtlhdfkvamsdlvz,?V/df,lsdb;dfbd;bkerfbThis is the stuff in the room. ekhndfghrtlhdfkvamsdlvz,?V/df,lsdb;dfbd;bkerfb","notes":"Other info"},"type":"Map","column":"droppable-4","tab":"welcome-info"}]`;
