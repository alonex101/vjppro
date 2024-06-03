if ($response.body != 'undefined'){
var mgmdev = JSON.parse($response.body);
const url = $request.url;

if (url.indexOf('remini') != -1) { ids = "com.bigwinepot.nwdn.international.1w_p9_99_pro";}

mgmdev["me"]["active_subscriptions_ids"] = [(ids)];
mgmdev["me"]["active_bundle_subscriptions"] = [{
   "expiry" : "2080-08-08T08:08:08+00:00",
   "product_id" : (ids),
   "features" : ["unlock"]
  }];
mgmdev["settings"]["__identity__"]["expiration"] = "2080-08-08T08:08:08+00:00";
$done({body : JSON.stringify(mgmdev)});
}
