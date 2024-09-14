int basic_op(char op, int value1, int value2)
{

    int ret;

    switch (op)
    {
    case '+':
        ret = value1 + value2;
        break;

    case '-':
        ret = value1 - value2;
        break;

    case '*':
        ret = value1 * value2;
        break;

    case '/':
        ret = value1 / value2;
        break;

    default:
        ret = -1;
        break;
    }

    return ret;
}