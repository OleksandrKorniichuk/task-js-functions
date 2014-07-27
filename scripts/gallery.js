
		/*Написати модуль Галерея.
		Модуль буде отримувати дані про картинки в форматі JSON. 
		На даний момент ці дані можна зберігати в текстовому вигляді безпосередньо в .js файлі*/
var gallery = [
			{
				"name": "cat",
				"path": "images/cat.png",
				"description": "The best cat ever",
				"date": "2014-07-21T09:05:34.540Z"
			},
			{
				"name": "dog",
				"path": "images/dog.png",
				"description": "The best dof ever",
				"date": "2014-07-21T09:06:05.544Z"
			},
			{
				"name": "giraffe",
				"path": "images/giraffe.png",
				"description": "",
				"date": "2014-07-21T09:07:24.187Z"
			},
			{
				"name": "dinosaur",
				"path": "images/dinosaur.png",
				"description": "The best dinosaur ever",
				"date": "2014-07-21T09:07:47.683Z"
			}
		];


var jsonGalleryString = JSON.stringify(gallery);
var jsonGalleryObject = JSON.parse(jsonGalleryString);
console.log(jsonGalleryObject[3].name);
console.log(jsonGalleryObject[3].path);
console.log(jsonGalleryObject[3].description);
console.log(jsonGalleryObject[3].date);
/*1.1 Додати картинку галереї.*/
function addNewImage (name, path, description, date) {
	var add = {};
	add.name = name;
	add.path = path;
	add.description = description;
	add.date = date;
	gallery.push(add);			
}
/*1.2 Редагувати картинку галереї.*/
function editImage (galleryArr, name, path, description, date) {
	var a, editNameImage ;
	for(a in galleryArr){
		if (galleryArr[a].name == editNameImage){
			obj[a].name = name;
			obj[a].path = path;
			obj[a].description = description;
			obj[a].date = new Date (dt);
		}
	}		
}
/*1.3 Видалити картинку галереї.*/
function deleteImage(galleryArr, name) {
	var a;
    for (a in galleryArr) {
		if (galleryArr[a].name == name) {
	    	ggalleryArr.splice(a, 1);	    			
		}
    }
}

/*2. Написати функцію, що буде виводити на екран інформацію про передані
картинки галереї. Та використовувати її для виведення результату роботи
всіх функцій галереї.*/
function showAll(gallery) {
	var a, b;
   	for (a in gallery) {
		console.log(a + ": " + gallery[a]);
		for (b in gallery[a]) {
	    	console.log(b + ": " + gallery[a][b]);
		}
    }
}
showAll(gallery);

/*3. Відсортувати картинки по зазначеному полю (поле передавати аргументом у функцію).*/
function sortGallery(gallery, i) {
    gallery.sort(i);
}
sortGallery(gallery, "name");

/*4. Відфільтрувати картинки по переданому полю.*/
function filterGallery(galleryArr, i) {
	var filter = "";
       filter = JSON.stringify(galleryArr, [i]);
	filter = JSON.parse(filter);
}
console.log(filterGallery(gallery, "date"));

/*5. Серіалізвати галерею в формат JSON. Додати можливість серіалізувати поля по деякій умові.
Наприклад, лише імена картинок, або лише картинки, що мають шлях до файла.*/
function toJsonGalleruName() { 
  	this.valueGallery = jsonGalleryObject[3].name;
  	this.toJSON = function() { 
    return this.valueGallery;
  	};

}
console.log( JSON.stringify( new toJsonGalleruName() ) );
function toJsonGalleruPath() { 
  	this.valueGallery = jsonGalleryObject[3].path;
  	this.toJSON = function() { 
  		if(this.path !== ""){
			return this;
		}				
    return this.valueGallery;
  	};
}
console.log( JSON.stringify( new toJsonGalleruPath() ) );  

/*6. Написати функцію, що буде перевіряти, чи всі картинки мають опис.*/
function descriptionGallery(galleryArr){
	var a ;
	for(a in galleryArr){
		if (galleryArr[a].description == ""){
				console.log(galleryArr[a].name);
		}
	}
}
descriptionGallery(gallery);		
/*Створити ще одну галерею, та викликати функції першої галереї в контексті другої.*/
var childGallery = [
			{
				"name": "cat2014",
				"path": "images/cat.png",
				"description": "The best cat ever",
				"date": "2014-07-21T09:05:34.540Z"
			},
			{
				"name": "dog2014",
				"path": "images/dog.png",
				"description": "The best dof ever",
				"date": "2014-07-21T09:06:05.544Z"
			},
			{
				"name": "giraffe2014",
				"path": "images/giraffe.png",
				"description": "",
				"date": "2014-07-21T09:07:24.187Z"
			},
			{
				"name": "dinosaur2014",
				"path": "images/dinosaur.png",
				"description": "The best dinosaur ever",
				"date": "2014-07-21T09:07:47.683Z"
			}
		];
		
addNewImage(childGallery, "newImage", "childGaller/newImage.jpg", "newImage description", Date.now());
editImage(childGallery, "newImage", "newImage2014", "childGaller/newImage2014.jpg", "newImage2014 description", Date.now());
deleteImage(childGallery, "Spydrmen");
showAll(childGallery);
sortGallery(childGallery, "name");
filterGallery(childGallery, "name");
descriptionGallery(childGallery);