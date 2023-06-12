`Projeden anladigim`: Kullanicinin sosyal medya linklerini derli toplu, tablo halinde ve guzel bir arayuzle gorebilmesi ve bu verilere yeni veri ekleyebilmesi gerekmektedir. Ayrica uygulama gorunumu responsive olmalidir.

`Ozet olarak izledigim adimlar: ` Devextreme kütüphanesiyle küçük bir deneme yaparak tablo oluşturabileceğimi anladıktan sonra, sayfayı baştan başlayarak sırayla header bileşeninden başlayarak tablo ve ilgili ek öğelerini yazdım. Verileri önce .js uzantılı dosyadan, daha sonra daha gerçekçi bir .json dosyasından alarak ve son olarak da local storage' tan alarak adım adım ilerleyerek uygulamayı tamamlamaya çalıştım.

`Izledigim adimlar`:

- Figma dosyasindan inceledigim kadariyla teknik olarak veri: sosyal medya hesabi uzerine kurulu, asgari olarak hesabin linki, adi ve aciklamasi olmali.

- Ilk olarak devextreme dokumanlarina ulasip istenilen tasarim icin uygun bir datagrid bulup bulamayacagima baktim.

- Devextreme ile bu uygulamayi yapabilecegimi dusunup diger library datatables.net e fazla bakmadim ve ornek veriler olusturup deneme yapmaya basladim.

- Sececegim kutuphaneler arasinda Vanilla Js ve React vardi, React i sectim. Vanilla Js ile calisirken cok fazla kod yazmam gerekecekti, ek olarak React' te var olan en temel ozellikleri bile tekrardan kendim yazmam gerekecekti. Ornek olarak; html elementi uretme fonksiyonu, state in tek bir yerden yonetilmesi, ... gibi ozellikler.

- Sayfa bilesenlerinden cogunlukla header' daki linkleri daha granuler hale getirdim. Modal' daki bilesenler de bunun icin bir aday gibi gorunuyordu ama butun olarak kalmasi daha iyi dusundum. Datagrid' i de ayni sekilde bilesenlerine ayirmadim.

- Olabildigince cok state i ana bilesen App e tasidim fakat tablonun state inin lokal olmasi daha iyi diye dusundum, App'te tablonun state ile bir degisiklik de yapmayacaktim.

- Devextreme sitesinde vakit gecirip sunulan kod orneklerini kopyalayip denedim. En cok datagrid in anlatildigi bolume odaklandim. Datagridi denerken islevsel olarak cok ozellestirilebilecegini gordum.

- Devextreme ile arayuzun nasil goruleceginin ozellestirilmesinin mevcut Devextreme css degerlerinin ezilmesi ile olacagini ogrendim. Tum ozellestirmeler icin tek tek google aramasi yapmak yerine tarayicinin icinde mevcut bulunan devtools ile ogeyi inceleyip olabildigince dusuk css specifity kullanarak ozellestirdim. Sectigim css siniflarinin ne oldugu daha sonra lazim olabilir diye yorum olarak ekledim.

- Devextreme sitesinden datagrid yapabilecegimi anladiktan sonra ilk sayfa bileseni olan header ile basladim yazmaya.

- Kodlari yazarken temel programlama ilkesine olabildigince uygun davranmaya calistim: "Problemi / uygulamayi kodunu yazabilecegin kadar kucuk parcalara boldukten sonra yaz."

- Onyuz kodlarini yazip css dosyasindan gorunumu ayarlarken once bosluklari, hizalamalari belirleyip daha sonrasinda renkleri ayarladim.

- Responsive tasarim konusunda figma tasarimindaki gibi tablonun basladigi, bittigi yer ile headerin baslayip bittigi yerin ayni hizada olmasini saglamayi amacladim.

- Devextreme datagridini responsive yapmak biraz daha zorlayiciydi, tablonun kendisi dogal olarak responsive olmasina ragmen altindaki ve ustundeki kisimlar icin css degerlerini ezmek gerekiyordu ve bazi html elementleri position: absolute; ozelligine sahipti.

- Tablo gorunumundeki web uygulamalarinin nasil responsive olmasi gerektigini arastirdigimda https://medium.com/appnroll-publication/5-practical-solutions-to-make-responsive-data-tables-ff031c48b122 --> buradaki cozumlerden tablonun varsayilan hali zaten responsive ozellikteydi.

### Çalışmalarım devam ediyor ve bazı duzenlemeler eklemeye çalışacağım.

- Az miktarda veri oldugunda veya "show: 4 rows" secildiginde bos satirlarin olmasi ve seritli gorunmemesi.

- Tablonun sag altinda paging elementindeki kutucugun tasarimdan daha buyuk gorunmesi, html form input elementlerine stil uygulamak beklenmeyen sonuclar verdigi icin daha sonra input un wrapperlarinin stilini degistirerek deneyecegim.

- Daha sık git commitler ile bu uygulamayi yapsam daha iyi olurdu.

- README.md dosyasina uygulamanin kisaca nasil gorundugunu gosteren bir gif eklenmeli.
