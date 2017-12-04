"# immutable-v4-toJS-speed-test" 

Used to ilustrate problems in Immutable.toJS function performance between immutable 4.0.0-rc.7 and 4.0.0-rc.8

To start the benchmark simply:

1. Clone the project
1. npm install
1. npm start
 
Then update the package json immutable dependency between immutable 4.0.0-rc.7 and 4.0.0-rc.8
 
When using immutable 4.0.0-rc.7 result is:

```
immutable-v4-toJS-speed-test>npm start
> node index.js

toJS_0: 20.259ms
toJS_1: 17.809ms
toJS_2: 12.151ms
toJS_3: 18.429ms
toJS_4: 11.446ms
toJS_5: 21.102ms
toJS_6: 12.043ms
toJS_7: 22.106ms
toJS_8: 12.677ms
toJS_9: 15.254ms
toJS_10: 13.744ms
toJS_11: 34.669ms
toJS_12: 10.126ms
toJS_13: 10.433ms
toJS_14: 9.972ms
toJS_15: 9.026ms
toJS_16: 8.306ms
toJS_17: 22.671ms
toJS_18: 9.607ms
toJS_19: 9.607ms
toJS_20: 23.877ms
toJS_21: 9.255ms
toJS_22: 8.949ms
toJS_23: 8.655ms
toJS_24: 8.741ms
toJS_25: 23.331ms
toJS_26: 9.487ms
toJS_27: 9.579ms
toJS_28: 24.954ms
toJS_29: 9.424ms
TOTAL toJS: 446.493ms
```

the same test run on immutable 4.0.0-rc.8
```
immutable-v4-toJS-speed-test>npm start
> node index.js

toJS_0: 40.072ms
toJS_1: 36.409ms
toJS_2: 31.473ms
toJS_3: 36.535ms
toJS_4: 31.281ms
toJS_5: 44.084ms
toJS_6: 25.183ms
toJS_7: 24.411ms
toJS_8: 25.135ms
toJS_9: 25.165ms
toJS_10: 25.845ms
toJS_11: 36.686ms
toJS_12: 25.754ms
toJS_13: 25.374ms
toJS_14: 39.767ms
toJS_15: 24.247ms
toJS_16: 23.947ms
toJS_17: 25.263ms
toJS_18: 43.881ms
toJS_19: 26.107ms
toJS_20: 23.868ms
toJS_21: 24.735ms
toJS_22: 38.913ms
toJS_23: 23.662ms
toJS_24: 24.081ms
toJS_25: 40.107ms
toJS_26: 25.985ms
toJS_27: 39.427ms
toJS_28: 28.773ms
toJS_29: 54.600ms
TOTAL toJS: 947.584ms

```
