const User = require('./User');
const Trip = require('./Trip');
const TokenBlacklist = require('./TokenBlacklist');

// Trip.create([
//     {
//         destination: 'Великденски острови',
//         imageUrl: 'https://ikarpress.com/wp-content/uploads/2016/04/velikdenski_ostrovi6.jpg',
//         description:'Великденски остров или Остров Пасха, е вулканичен остров в източната част на Тихия океан с площ 165,5 квадратни километра. Най-високата му точка достига 539 метра. Островът се намира на 3514 километра западно от Чили и 2075 километра източно от островите Питкерн, което съвместно с архипелага Тристан да Куня го прави най-изолираното населено място в света. Създаден е от три вулкана: Поике, Рано Као и Теревака. Заедно с необитаемия остров Сала и Гомес образува провинция Исла де Паскуа в състава на област Валпараисо. Местното название на острова е Рапа Нуи. Площта му е 163,6 км², а населението 5806 души. Островът е открит от холандския пътешественик Якоб Рогевен в навечерието на Великден, 1722 г.Всичко, което е свързано с острова е забулено в тайни. От къде са се появили първите му обитатели? Как са попаднали там? Как и защо са изваяли повече от 600 гигантски каменни статуи?',
//         author:'Maya'
//     },
//     {
//         destination:'Исландия',
//         imageUrl: 'https://bg.freekaamal.net/images/171/171351/b5790006f5d33f7ebe071eedb37c19e2.jpg',
//         description:'Исландия е несъмнено магична страна, която попада в списъка с най-желани дестинации на почти всеки един пътешественик.\n' +
//             'Исландия, малка островна държава в северната част на Атлантическия океан, представлява вулканична лаборатория, в която нестихващите земни сили непрекъснато „експериментират“ и променят ландшафта на страната. Неспокойни вулкани и гейзери, величествени водопади и вечно топящи се ледници са основните „виновници“ за този нереален лунен пейзаж.',
//         author:'Bob'
//     },
// ])
// User.create({
//     email: 'admin@admin.com',
//     username: 'Admin',
//     password: '1234',
//     roles: ['Admin']
// })

module.exports = {
    User,
    Trip,
    TokenBlacklist
};