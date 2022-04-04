package main
import "fmt"

var (
	gobalN1 = 100
	gobalN2 = 200
	gobalN3 = 300
)

func main() {
	var i int
	fmt.Println("i = ", i)

	name := "Link"
	fmt.Println("name: ", name)

	var n1, n2, n3 int
	fmt.Println(n1, n2, n3)

	var i1, i2, i3 = "1", "2", "3"
	fmt.Println(i1, i2, i3)
	fmt.Println(i1 + i2 + i3)

	fmt.Println(gobalN1, gobalN2, gobalN3)

	var (
		aa = 123
		bb = 456
	)
	fmt.Println(aa, bb)
}