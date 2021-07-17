import 'package:firebase_remote_config/firebase_remote_config.dart';
import 'package:flutter/services.dart';
import 'package:hostapp/src/viewmodels/base_model.dart';
class ProViewModel extends BaseModel{
String key;

Future setupRemoteConfig() async {
  final RemoteConfig remoteConfig = await RemoteConfig.instance;
  // Enable developer mode to relax fetch throttling
   var result;
  try {
    remoteConfig.setConfigSettings(RemoteConfigSettings(fetchTimeout: const Duration(seconds: 10),
      minimumFetchInterval: Duration.zero,));
    await remoteConfig.fetch();
    await remoteConfig.activate();
    result = remoteConfig.getString('key');
    key = result.toString();
    print('KEY $key');

  } on PlatformException catch (exception) {
    // Fetch throttled.
    print(exception);
  } catch (exception) {
    print('Unable to fetch remote config. Cached or default values will be '
        'used');
  }
  return result;
}

}