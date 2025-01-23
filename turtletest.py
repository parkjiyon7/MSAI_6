from turtle import *
import random
color('green', 'yellow')
# begin_fill()
# while True:
#     forward(200)
#     left(170)
#     if abs(pos()) < 1:
#         break
# end_fill()
# done()
shape('turtle')
fillcolor('green')
pencolor('red')
# begin_fill()


# while drawnline < 4:

#     forward(100)
#     right(90)
#     drawnline = drawnline + 1

# end_fill()

# done()

def random_color():
    r = random.randint(0, 255)
    g = random.randint(0, 255)
    b = random.randint(0, 255)
    return (r/255, g/255, b/255)

#si = random.randint(0, 600)

class rect:
    def __init__(self, size, col):
        self.size = size
        self.col = col
        pencolor(col)
        penup()
        self.x = random.randint(-300, 300)
        self.y = random.randint(-300, 300)
        goto(self.x, self.y)
        pendown()

    def rec(self):
        drawnline = 0
        while drawnline < 4:
            forward(self.size)
            right(90)
            drawnline = drawnline + 1
        

# rect1 = rect(si, random_color())
# rect1.rec()

# rect2 = rect(si, random_color())
# rect2.rec()

for i in range(10):
    si = random.randint(50, 300)
    rect1 = rect(si, random_color())
    rect1.rec()

done()



