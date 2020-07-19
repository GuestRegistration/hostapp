import 'dart:io';

import 'package:flutter/foundation.dart';

class CloudStorageService {
  Future<CloudStorageResult> uploadImage({
    @required File imageToUpload,
    @required String title,
  }) async {

  //   final StorageReference firebaseStorageRef = FirebaseStorage.instance.ref().child('DemoProperties');
  //  var imageFileName = title + DateTime.now().millisecondsSinceEpoch.toString();

  //   StorageUploadTask uploadTask = firebaseStorageRef.child(imageFileName).putFile(imageToUpload); //Upload Image with path
  //   StorageTaskSnapshot storageSnapshot = await uploadTask.onComplete;

  //   var downloadUrl = await storageSnapshot.ref.getDownloadURL();

  //   if (uploadTask.isComplete) {
  //     var url = downloadUrl.toString();
  //     return CloudStorageResult(
  //       imageUrl: url,
  //       imageFileName: imageFileName,
  //       );
  //   }

  //   return null;
  }
}

class CloudStorageResult {
  final String imageUrl;
  final String imageFileName;

  CloudStorageResult({this.imageUrl, this.imageFileName});
}