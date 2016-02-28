TestSchema = new SimpleSchema({
  uid: { type: String, label: 'UID' },
  upload_id: {
    type: String,
    autoform: {
      afFieldInput: {
        type: 'fileUpload',
        collection: 'Uploads',
      },
    },
  }
});

if (Meteor.isClient) {
  Template.form.helpers({

    test_schema: function () {
      return TestSchema;
    },

    test_doc: function () {
      return {};
    },

  });
}

if (Meteor.isServer) {
}
