$subscribe_url = "https://us6.api.mailchimp.com/2.0/lists/subscribe";

$email_struct = new StdClass();

$email_struct->email = $_REQUEST['email'];

$parameters = array(
    'apikey' => 'db668c84a5d2f4a3d7502cc8d2f88efd-us6',
    'id' => '187705',
    'email' => $email_struct,
    'double_optin' => false,
    'send_welcome' => true
);

$curl = curl_init($subscribe_url);
curl_setopt($curl, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
curl_setopt($curl, CURLOPT_POST, true);
curl_setopt($curl, CURLOPT_POSTFIELDS, json_encode($parameters));
curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
$response = curl_exec($curl);

echo $response;