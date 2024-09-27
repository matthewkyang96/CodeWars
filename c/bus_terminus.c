#include <stddef.h>

int bus_terminus(size_t nb_stops, const short bus_stops[nb_stops][2])
{
    auto bus = 0; // 🚌 :p

    for (int i = 0; i < nb_stops; i++)
    {
        bus += bus_stops[i][0];
        bus -= bus_stops[i][1];
    }
    return bus;
}