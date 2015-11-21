Template.pagination.helpers({
  postsCount() {
    return Posts.find().count();
  },
  postsPerPage() {
    return PostsPerPage.get();
  },
  totalPages() {
    return TotalPages.get();
  },
  currentPage() {
    return CurrentPage.get();
  }
});

Template.pagination.events({
  'click .add-post'() {
    Posts.insert({ title: 'Some post' });
  },
  'click .remove-post'() {
    let id = Posts.findOne();
    Posts.remove(id);
  },
  'change #postsPerPage'(event) {
    PostsPerPage.set(event.currentTarget.value);
  },
  'click .previous-page'() {
    let oldValue = CurrentPage.get();
    CurrentPage.set(oldValue - 1);
  },
  'click .next-page'() {
    let oldValue = CurrentPage.get();
    CurrentPage.set(oldValue + 1);
  }
});
