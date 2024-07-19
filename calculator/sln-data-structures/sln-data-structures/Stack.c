
#include <stdio.h>
#include <stdbool.h>

#define size_limit 1000

typedef struct
{
	float data[size_limit];
	int top_element;
} Stack;

typedef struct
{
	float data[size_limit];
	int front_element;
	int back_element;
} Queue;

void initialize(Stack* stack)
{
	stack->top_element = -1;
}

bool isFull(Stack* stack)
{
	return stack->top_element == size_limit - 1;
}

bool isEmpty(Stack* stack) {
	return stack->top_element == -1;
}

void push(Stack* stack, float value)
{
	if (isFull(stack)) 
	{
		printf("Stack is full.\n");
	}
	else
	{
		stack->top_element++;
		stack->data[stack->top_element] = value;
	}
}

void pop(Stack* stack)
{
	if (isEmpty(stack))
	{
		printf("Empty stack.\n");
		return -1; 
	}
	else
	{
		float value = stack->data[stack->top_element];
		stack->top_element--;
	}
}

float peek(Stack* stack) 
{
	if (isEmpty(stack)) 
	{
		printf("Empty stack.\n");
		return -1;
	}
	else
	{
		return stack->data[stack->top_element];
	}
}

void main() {}