const chalk = require("chalk")
const fs = require("fs")

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

global.hituet = 0
global.gopayno = "6281775172693","6282134248309"
global.danano = "6281775172693"
global.shopeepayno = "6281775172693"
global.creator = "6281775172693@s.whatsapp.net","6282134248309"
global.thumb = fs.readFileSync(`./image/thumb.png`)
global.qrisdonate = fs.readFileSync(`./image/qris.jpg`)
global.fake = `๐Zenss Bot WhatsApp`
global.packname = ``
global.author = `รอร โญโฌโญโฌโญโฌ ๐ โญโฌโญโฌโญโฌ รอร\n๏พ ๐๐ฟ๐ฒ๐ฎ๐๐ฒ๐ฑ ๐๐ ๐ญ๐ฒ๐ป๐๐\n๏พ ๐๐ฟ๐ฒ๐ฎ๐๐ผ๐ฟ ๐ญ๐ฒ๐ป๐๐ : ๐ฒ๐ฎ๐ด๐ต๐ฑ๐ฒ๐ฌ๐ฐ๐ฒ๐ณ๐ฌ๐ฑ๐ฌ๐ณ\n๏พ ๐ฌ๐ผ๐๐๐๐ฏ๐ฒ : ๐ญ๐ฒ๐ป๐๐๐๐๐๐\nโโโโโโโโโโ`
global.antilink = false
global.antiwame = false
global.autodltt = false
global.autosticker = false
global.ownerNomor = '6281775172693','6282134248309'
global.ownerName = 'Creator zens'
global.ownerNumber = ["6281775172693@s.whatsapp.net","6282134248309"]
global.cek1 = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
global.mess = {
    wait: 'Wait Sis Please be patient',
    succes: 'Good Luck Sis ?',
    admin: 'Group Admin Special Features!!!',
    botAdmin: 'Bots Must Be Admins First!!!',
    owner: 'Ente Kadang-kadang Ente, Nih Khusus Owner Nih!!!',
    group: 'Features Used Only For Groups!!!',
    private: 'Features Used Only For Private Chat!!!',
    bot: 'Bot Number User Special Features!!!',
    error: 'Error Sis, Please Chat Owner...',
    premium: 'Maaf Sebelumya Kamu Belum Premium, Silahkan Pencet Di Bawah Untuk Beli Premium',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 25
}

//database
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})