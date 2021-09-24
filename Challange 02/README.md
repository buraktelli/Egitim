Challenge 02 Custom Checkbox, Custom select and Custom
Radio Button
Projede 3 tane yapılması gereken şey var. Select, checbox, radiobutton. Bunların div'lerini bu şekilde
ayırmanızı istiyoruz. Her birinin css dosyalarının farklı olmasını istiyoruz.
<head>
...
<link rel="stylesheet" href="select.css">
<link rel="stylesheet" href="checkbox.css">
<link rel="stylesheet" href="radio.css">
</head>
<body>
<div class="select-list"> ... </div>
<hr>
<div class="checkbox-list"> ... </div>
<hr>
RENK SEÇİNİZ
<div class="radio-list"> ... </div>
</body>
Select
Tıklanıldığında açılması ve açıkken başka bir yere tıklanıldığında kapanması gerekiyor. Bunları
tamamen Html ve Css ile yapılmalı.
select ve option tag'i kullanılmamalı.
Menü açıldıktan sonra içindeki bir element'e tıklanıldığında seçildiğini anlamak için Javascript
kullanınız.
html yapısı aşağıdaki gibi olmalıdır.
<div class="select-list">
<div id="cicek" class="select">
<span>Çiçek Seçiniz</span>
<ul>
<li>Çiçek Seçiniz</li>
<li>Lale</li>
<li>Gül</li>
<li>Fil</li>
</ul>
</div>
<div id="bocek" class="select">
<span>Böcek Seçiniz</span>
<ul>
<li>Böcek Seçiniz</li>
<li>Karınca</li>
<li>Sinek</li>
<li>Sivri</li>
<li>Fil</li>
</ul>
</div>
</div>
İpucu:
alt menünün açılmasını focus pseudo selectorünü kullanmanız gerekiyor.
focus pseudo selector'ü input , button , textarea gibi tagler'de tıkladığınızda
eklenir. Ama varsayılan bir div veya span taglere tıkladığınızda focus olamazsınız.
focus olmanızın için bu taglere özellikler eklemeniz gerekecektir. Bu özelliği bulunuz.
span 'a focus olduğunuz zaman ul 'nin display özelliğini değiştirmelisiniz. Ve bunlar
kardeşler, selector 'ü yazarken dikkatli olun
li 'ye tıkladığınızda span 'ın focus özelliği kalkacağı için li'ye tıklamamış
olacaksınız. Bu sebepten dolayı, li 'ye click eventi yerine daha önceden tetiklenen
bir event 'i eklemeniz gerekiyor.
Checkbox ve Radio
Bu iki işin yapılış mantığı birbirine benzemektedir. Öncesinde aşağıdaki özellikleri bilmenizde yarar
vardır.
before , after ve checked pseudo selectorlerini anlamanız gerekiyor.
content değeri ne işe yarar bunu öğrenmelisiniz
label tag'i ne işe yarar, inputlar ile nasıl çalışır.
Checkbox
Sadece Css ve Html ile yapılmalı
Static pixel boyutları kullanabilirsiniz.
<input type="checkbox"> kullanmalısınız ve display özelliği none olmalı
input:checkbox 'a id vermemelisiniz.
Topun oynadığı alanın boyutu için: width değeri 48px; height değeri 24px. 1 pixellik siyah
border'ı olmalı
içerideki yuvarlağın boyutu için: width değeri 20px; height değeri 20px olmalı.
Checkbox seçildiğinde top sağa kaymalı ve renk değiştirmeli.
Top kenarlara değmemeli.
Okudum, onaylıyorum 'a tıklanıldığında da checkbox'ın state'i değişmeli.
Radio
Sadece Css ve Html ile yapılmalı.
Static pixel boyutları kullanabilirsiniz.
input:radio 'a id vermemelisiniz.
<input type="radio"> kullanmalısınız ve display özelliği none olmalı
dış çember radiobutton seçilmemiş ise gözükmemeli.
dış çember radiobutton seçildiğinde çizilmeli ve tamamen gözükmeli.
dış çember radiobutton 'un üzerine fare ile gelince opacity değeri 0.25 olmalı.
dış çember'in renk değeri radio ile aynı olmalı. burada inherit değerini kullanmanız gerekir.
Örneğin aşağıda renk değeri green olarak verilmiştir.
<input type="radio" name="renk" value="yesil">
<span class="radio-circle" style="color: green;"></span>
https://imgur.com/a/YMvSpTb
https://gfycat.com/goodcolorlessfattaileddunnart