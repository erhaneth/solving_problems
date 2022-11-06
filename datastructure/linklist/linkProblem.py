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