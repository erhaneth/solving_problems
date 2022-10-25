# create classes, blueprint for nodes:
class Node:
    # constructor
    # first parameter always it"self"
    def __init__(self, data, next=None):
        self.data = data
        # def __init__(self, data, taco)
        # self.next = taco
        self.next = next
    def __str__(self):
        return self.data
  
# A new class that use Node class
class Linked_List:
    def __init__(self):
        self.head=None
        self.tail=None 
        self.size=0
    def __str__(self):
        if self.size == 0:
            return '[]'
        else:
            current = self.head
            result =str(current)
            while current.next:
                result+= f',{str(current.next)}'
                current=current.next
            return f"[{result}]"
    # method inside of class list
    def insert_front(self, data):
        #  the list is empty
        if(self.size==0):
        # the list contains 1 node already
         self.head = Node(data)
         self.tail = self.head
        elif(self.size == 1):
        # there are 2 or more nodes already in the list
         self.head = Node(data,self.tail)
        else:
         self.head = Node(data, self.head)  
        self.size += 1

    def insert_after(self, data, node_data):
        # iterate from head locate 'block'
        current = self.head
        while(current.data != node_data):
            current = current.next
        if(current != node_data):
          return -1
        else:
            city = Node("San Mateo", current.next)
            current.next = city
            if(current == self.tail):
                self.tail = city
            self.size+= 1


# created a new node

my_list = Linked_List()
my_list.insert_front("Heg")
my_list.insert_front("Gumus")
my_list.insert_front("Amed")
my_list.insert_front("Block")
my_list.insert_front("Erika")
my_list.insert_after("San Mateo","Amed")

print(f'tail:{my_list.tail}')


print(my_list)


        