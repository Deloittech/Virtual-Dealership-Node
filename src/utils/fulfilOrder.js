const request = require("request");

const fulfilOrder = (orderItemId, statusCode, statusDescription, callback) => {

    const url = "http://vd-inventory-query-rds.us-e1.cloudhub.io/v2/orders/orderItem/history";

    const payload = {
        'order_item_id': orderItemId,
        'status_code': statusCode,
        'status_description': statusDescription
    }

    const options = {
        method: 'POST',
        json: true,
        url,
        body: payload
    }

    request(options, (err, response, data) => {

        if (err) {
            callback('Unable to connect to order item history service', response, undefined);
        } else {
            callback(undefined, response, data);
        };
    });
};

module.exports = fulfilOrder;