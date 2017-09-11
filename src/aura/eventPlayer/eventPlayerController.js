({
    show : function(component, event) {
        console.log("event received");
        //console.log(event);
        var message = event.getParam("message");
        //console.log(message);
        var events = component.get("v.events");
        //console.log(JSON.stringify(message));

        events.push(JSON.stringify(message));

        component.set("v.events", events);
    }
})
