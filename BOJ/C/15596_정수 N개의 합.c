#include <stdio.h>

long long sum(int *a, int n) {
    long long ans = 0;

    for (int i = 0; i < n; i++) {
        ans += a[i];
    }
    
    return (ans);
}

int main() {
    int arr[4] = { 1, 2, 3, 4 };
    printf("%lld", sum(arr, 4));

    return (0);
}