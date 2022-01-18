#include <stdio.h>
#include <string.h>

int main(void) {
    char str[1000000];
    int cnt[26] = {0, };
    int len, i, j, max, maxidx = 0;
    int checkalp = 0;
    
    scanf("%s", str);
    len = strlen(str);

    for (i = 'a'; i <= 'z'; i++) {
        for (j = 0; j < len; j++) {
            if (i == str[j]) {
                cnt[i - 'a']++;
            }
        }
    }

    for (i = 'A'; i <= 'Z'; i++) {
        for (j = 0; j < len; j++) {
            if (i == str[j]) {
                cnt[i - 'A']++;
            }
        }
    }

    max = cnt[0];
    for (i = 0; i < 26; i++) {
        if (max < cnt[i]) {
            max = cnt[i];
            maxidx = i;
        }
    }

    for(i = 0; i < 26; i++) {
        if (max == cnt[i]) {
            checkalp++;
        }
    }
    
    if (checkalp > 1) {
        printf("?\n");
    } else {
        printf("%c", maxidx + 'A');
    }

    return 0;
}