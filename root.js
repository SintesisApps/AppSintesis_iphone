//###############root.js
// -*- coding: utf-8 -*-

(function ($)
{ //=================================================================================
    $(document).ready(function()
    {
        $(document).bind("deviceready", init);
    });

    function init()
    {
        var s = 'Device Name: '     + device.name     + '<br />' +
                            'Device PhoneGap: ' + device.phonegap + '<br />' +
                            'Device Platform: ' + device.platform + '<br />' +
                            'Device UUID: '     + device.uuid     + '<br />' +
                            'Device Version: '  + device.version  + '<br />';

       // $('#deviceProperties').html(s);

        var platform = device.platform;
        if(platform.search("iPad") != -1)
        {
            alert("ipad");
            location.href="index_k.html";
        }

        if(platform.search("iPhone") != -1)
        {
            alert("iphone");
            location.href="index_m.html";
        }

    }

//=================================================================================
})(jQuery)// JavaScript Document