var uploadsStore = new FS.Store.GridFS('uploads');

var maxSize = 100 * 1024; // 100 Kb

Uploads = new FS.Collection('uploads', {
  stores: [uploadsStore],
  filter: {
    maxSize: maxSize,
    onInvalid: function (message) {

      console.error(message);
    }
  },
});

var allowed = false;

Uploads.allow({
  insert: function (userId, doc) {

    return allowed;
  },

  update: function (userId, doc, fieldNames, modifier) {

    return allowed;
  },

  remove: function (userId, doc) {

    return allowed;
  },

  download: function (userId, doc) {

    return allowed;
  },
});

