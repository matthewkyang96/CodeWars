#define IP_ADDRESS_INVALID "not a valid ipv4 or ipv6 ip address"
#define IP_ADDRESS_NOT_FOUND "ip address not in the database"
#define IP_ADDRESS_REQUIRED "no ip address was supplied"

typedef struct
{
    const char *lang;
    const char *word;
} lookup;

lookup table[] = {{"english", "Welcome"},
                  {"czech", "Vitejte"},
                  {"danish", "Velkomst"},
                  {"dutch", "Welkom"},
                  {"estonian", "Tere tulemast"},
                  {"finnish", "Tervetuloa"},
                  {"flemish", "Welgekomen"},
                  {"french", "Bienvenue"},
                  {"german", "Willkommen"},
                  {"irish", "Failte"},
                  {"italian", "Benvenuto"},
                  {"latvian", "Gaidits"},
                  {"lithuanian", "Laukiamas"},
                  {"polish", "Witamy"},
                  {"spanish", "Bienvenido"},
                  {"swedish", "Valkommen"},
                  {"welsh", "Croeso"}};

const char *greet(const char *language)
{
    if (!language)
    {
        return table[0].word;
    }

    int rows = sizeof(table) / sizeof(lookup);

    for (int i = 0; i < rows; i++)
    {
        if (strcmp(language, table[i].lang) == 0)
        {
            return table[i].word;
        }
    }

    return table[0].word;
}