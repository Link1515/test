package main
import (
	"fmt"
	"unsafe"
) 

func main() {
	i := 1.2
	fmt.Printf("%T \n", i)

	var i2 int64 = 120
	fmt.Printf("%T %d \n", i2, unsafe.Sizeof(i2))

	i3 := 15
  fmt.Printf("i 的類型是 %T, 占用字節數為 %d \n", i3, unsafe.Sizeof(i3))

	i4 := 5.123e3
	fmt.Println(i4)

	var c1 byte = 'a'
	var c2 byte = '0'
	fmt.Println("c1 = ", c1)
	fmt.Println("c2 = ", c2)
	fmt.Printf("c1 = %c, c1 的碼值為 %d \n", c1, c1)
	fmt.Printf("c1 = %c", 97)
}