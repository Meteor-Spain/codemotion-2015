// Creamos una colección.
Posts = new Mongo.Collection(null);

// Inicialiciamos nuestras variables reactivas. Las hacemos globales para
// poder jugar con ellas en la consola.
PostsPerPage = new ReactiveVar(3);
TotalPages   = new ReactiveVar(0);
CurrentPage  = new ReactiveVar(0);

// Calculamos el número total de páginas. Depende tanto del número de
// posts, como de los posts por página.
Tracker.autorun(() => {
  TotalPages.set(Math.ceil(Posts.find().count() / PostsPerPage.get()) || 1);
});

// Controlamos que si la página en la que estamos no existe, se cambie a la
// última. Esto puede pasar por ejemplo si se borran posts. También controlamos
// si la página es menor que cero, y la reseteamos a 1.
Tracker.autorun(() => {
  if (CurrentPage.get() > TotalPages.get()) {
    CurrentPage.set(TotalPages.get());
  } else if (CurrentPage.get() <= 0) {
    CurrentPage.set(1);
  }
});
