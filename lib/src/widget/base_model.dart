import 'package:flutter/cupertino.dart';
import 'package:provider/provider.dart';

abstract class BaseModelWidget<T> extends Widget{

  @protected
  Widget build(BuildContext context, T model);

@override
_DataProviderElement<T> createElement() => _DataProviderElement<T>(this); //Pass in current widget into the constutor


}


//This means that, When we use our BaseModel Widget,
//We get directly the information directly in d build function
class _DataProviderElement<T> extends ComponentElement{
_DataProviderElement(BaseModelWidget widget) : super(widget);

@override
BaseModelWidget get widget => super.widget;

@override
  Widget build()  => widget.build(this, Provider.of<T>(this));
}