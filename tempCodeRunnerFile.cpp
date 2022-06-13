#include<bits/stdc++.h>

using namespace std;
int solve(int z, unordered_set < int > & look, unordered_map < int, vector < int >> & helper) {
    if (look.count(z)) {
        return -1;
    }
    look.insert(z);
    int temp = INT_MIN;
    for (auto next: helper[z]) {
        temp = max(temp, 1 + solve(next, look, helper));
    }
    look.erase(z);
    return temp;
}
int main() {
    int z;
    cin >> z;
    int n, m;
    cin >> n >> m;
    unordered_map < int, vector < int >> temp;
    for (int i = 1; i <= m; ++i) {
        int start, end;
        cin >> start >> end;
        temp[start].push_back(end);
        temp[end].push_back(start);
    }
    unordered_set < int > look;
    int temp1 = solve(z, look, temp);
    if (temp1 == INT_MIN) {
        cout << 0 << endl;
    } else {
        cout << temp1 << endl;
    }
}