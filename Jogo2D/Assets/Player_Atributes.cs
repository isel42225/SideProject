using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Player_Atributes : MonoBehaviour
{
    public Transform ReachEndOfPath;
    public int Vida=100;

    // Update is called once per frame
    int FixedUpdate()
    {
        if (ReachEndOfPath==true)
        {
            Vida = 0;
            return Vida;
        }
        return Vida;
    }
}
