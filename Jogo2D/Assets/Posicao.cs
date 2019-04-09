using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Posicao : MonoBehaviour
{
    public Transform player;
    public Vector3 offset;
    
    void FixedUpdate()
    {
        transform.position = player.position + offset;
    }
}
