#pragma strict

function Start () {

}

var speed : float = 5;
  




  function Update() {
  
     if (Input.GetKey(KeyCode.A) && transform.position.x >= -3.79)
          {
              transform.position += Vector3.left * speed * Time.deltaTime;
          }
          if (Input.GetKey(KeyCode.D) && transform.position.x <= 3.79)
          {
              transform.position += Vector3.right * speed * Time.deltaTime;
          }

          if (Input.GetKey(KeyCode.W) && transform.position.y <= 2.80)
          {
              transform.position += Vector3.up * speed * Time.deltaTime;
          }
          if (Input.GetKey(KeyCode.S) && transform.position.y >= -2.80)
          {
              transform.position += Vector3.down * speed * Time.deltaTime;
          }
          if (Input.GetKey(KeyCode.F))
          {
          	  transform.Rotate(Vector3.forward * 4);
          }
          if (Input.GetKey(KeyCode.H))
          {
          	  transform.Rotate(Vector3.back * 4);
          }

}

