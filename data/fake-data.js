import Post from '../models/Post';
//id, image, title, description, userId, userName, userImage

const POST = [
  new Post(
    '1',
    'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80',
    'Pallone da calcio',
    'Scarpa nike blu con pallone da calcio professionale',
    'u1',
    'Billy',
    'https://images.unsplash.com/photo-1552072805-2a9039d00e57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80'
  ),
  new Post(
    '2',
    'https://images.unsplash.com/photo-1475440197469-e367ec8eeb19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    'Campo da baseball',
    'Match di baseball americano con molti spettatori presenti',
    'u2',
    'Jonny',
    'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
  ),
  new Post(
    '3',
    'https://images.unsplash.com/photo-1519925610903-381054cc2a1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    'Ballerina',
    'Ragazza balla davanti ad un pubblico ammaliato ',
    'u3',
    'Melissa',
    'https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
  ),
  new Post(
    '4',
    'https://images.unsplash.com/photo-1564415315949-7a0c4c73aab4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
    'Judo',
    '2 ragazzi combattono ferocemente senza farsi male',
    'u1',
    'Billy',
    'https://images.unsplash.com/photo-1552072805-2a9039d00e57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
  ),
  new Post(
    '5',
    'https://images.unsplash.com/photo-1564415315949-7a0c4c73aab4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
    'Spada',
    'Uomo di mezza età cerca di intimidirci con una spada nera',
    'u1',
    'Billy',
    'https://images.unsplash.com/photo-1552072805-2a9039d00e57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
  ),
  new Post(
    '6',
    'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
    'Flex(box)',
    'Ragazzo mostra i suoi muscoli per farsi una foto',
    'u3',
    'Melissa',
    'https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
  ),
  new Post(
    '7',
    'https://images.unsplash.com/photo-1470468969717-61d5d54fd036?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3383&q=80',
    'Salto',
    'Atleta salta 5 metri nel vuoto cercando di lievitare',
    'u3',
    'Melissa',
    'https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
  ),
  new Post(
    '8',
    'https://images.unsplash.com/photo-1519315901367-f34ff9154487?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    'Nuoto',
    'Nuotatore sta per compleatare la 300esima vasca',
    'u2',
    'Jonny',
    'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
  ),
  new Post(
    '9',
    'https://images.unsplash.com/photo-1523875194681-bedd468c58bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80',
    'Scacchi',
    'Per favore approvate gli scacchi come uno sport',
    'u2',
    'Jonny',
    'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
  ),
];

export default POST;
