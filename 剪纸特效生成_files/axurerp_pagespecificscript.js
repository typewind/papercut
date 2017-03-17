for(var i = 0; i < 28; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});
gv_vAlignTable['u17'] = 'center';gv_vAlignTable['u8'] = 'center';gv_vAlignTable['u21'] = 'center';gv_vAlignTable['u6'] = 'center';gv_vAlignTable['u13'] = 'top';gv_vAlignTable['u14'] = 'top';gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u26'] = 'center';gv_vAlignTable['u10'] = 'center';document.getElementById('u11_img').tabIndex = 0;

u11.style.cursor = 'pointer';
$axure.eventManager.click('u11', function(e) {

if (true) {

	SetPanelVisibility('u15','','fade',200);

}
});
gv_vAlignTable['u3'] = 'center';gv_vAlignTable['u12'] = 'center';gv_vAlignTable['u23'] = 'top';gv_vAlignTable['u24'] = 'top';gv_vAlignTable['u19'] = 'center';gv_vAlignTable['u22'] = 'top';document.getElementById('u25_img').tabIndex = 0;

u25.style.cursor = 'pointer';
$axure.eventManager.click('u25', function(e) {

if (true) {

	self.location.href="javascript:history.back()";

}
});
