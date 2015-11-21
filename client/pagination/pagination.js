Template.pagination.helpers({
  postsCount() {
    return Posts.find().count();
  },
  postsPerPage() {
    return PostsPerPage.get();
  },
  totalPages() {
    return TotalPages.get();
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
  'click .next-page'() {
    let oldValue = CurrentPage.get();
    CurrentPage.set(oldValue + 1);
  }
});
