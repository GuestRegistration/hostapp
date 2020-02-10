import 'package:flutter/material.dart';
//import 'package:encrypt/encrypt.dart' as Key;
import 'package:encrypt/encrypt.dart';
import 'package:encrypt/encrypt.dart' as Key;
import 'package:google_fonts/google_fonts.dart';


class SecondlyPlugin extends StatefulWidget {
  @override
  _SecondlyPluginState createState() => _SecondlyPluginState();
}

class _SecondlyPluginState extends State<SecondlyPlugin> {
  String contentEncryted, contentDecryte;
  String globalEncrypted, globalKey, decrypted;
  IV iv; Encrypter encrypter;
  Encrypted encrypted;
  TextEditingController contentController = TextEditingController();

  @override
  void initState() {
    util();
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
      title: Text('encrypt 4.0.0'),
      ),
      body:  Center(
        child: Column(
          children: <Widget>[
            Padding(
              padding: const EdgeInsets.all(15.0),
              child: Theme(
                data: new ThemeData(
                  primaryColor: Colors.redAccent,
                  primaryColorDark: Colors.red,
                ),
                child: new TextField(
                  decoration: new InputDecoration(
                      border: new OutlineInputBorder(
                          borderSide: new BorderSide(color: Colors.teal)),
                      hintText: 'Tell me about your fucking content',
                      helperText: 'Keep it save, Asshole',
                      labelText: 'Text Content',
                      prefixIcon: const Icon(
                        Icons.person,
                        color: Colors.green,
                      ),
                      prefixText: ' ',
                      suffixText: 'Encrypt',
                      suffixStyle: const TextStyle(color: Colors.green)),
                ),
              ),
            ),
            MaterialButton(
              child: Text('Tap to Encrypt'),
              onPressed: () {
                stringEncrypt(value: contentController.text);
              },
              color: Colors.green,
            ),
            SizedBox(height: 10,),
            Column(
              children: <Widget>[
                Text('Encrypted Content', style: GoogleFonts.alice(
                  textStyle: TextStyle(
                    fontWeight: FontWeight.bold,
                    color: Colors.black,
                    fontSize: 17,
                  ),
                )),
                Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: Text(
                      (contentEncryted == null ? '': contentEncryted)
                  ),
                )
              ],
            ),


            SizedBox(height: 50,),

            Column(
              children: <Widget>[
                Text('Decrypt Content', style: GoogleFonts.alice(
                  textStyle: TextStyle(
                    fontWeight: FontWeight.bold,
                    color: Colors.black,
                    fontSize: 17,
                  ),
                )),
                Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: Text(
                      (contentDecryte == null ? '' : contentDecryte)
                  ),
                )
              ],
            ),
            MaterialButton(
              child: Text('Tap to Decrypt', style: TextStyle(color:  Colors.white),),
              onPressed: () {
                stringDecrypt();
              },
              color: Colors.redAccent,
            ),
            SizedBox(height: 50,),
          ],
        ),
      ),
    );
  }

  stringEncrypt({String value})async{
    final plainText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit';
     encrypted = encrypter.encrypt(plainText, iv: iv);
     print(encrypted);
     showEncrypted(encryted: encrypted.base16.toString());
   // Inhec().showToast(message: 'Content Encrypted');
  }

  stringDecrypt()async{
    decrypted = encrypter.decrypt(encrypted, iv: iv);
    showDecrypt(decrypt: decrypted);
   // Functions().showToast(message: 'Content Decrypted');
  }


  void util(){
    final key = Key.Key.fromLength(32);
     iv = IV.fromLength(16);
     encrypter = Encrypter(AES(key));
  }

  showEncrypted({String encryted}){
    setState(() {
      contentEncryted = encryted;
    });
  }

  showDecrypt({String decrypt}){
    setState(() {
      contentDecryte = decrypt;
    });
  }
}
