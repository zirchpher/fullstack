// matchers
test("test objects", () => {
    const data = { name: "remmian" };
    data.age = 20;
    expect(data).toEqual({ name: "remmian", age: 20 });
});

test("null", () => {
    const data = null;
    expect(data).toBeNull();
    expect(data).toBeDefined();
    expect(data).not.toBeUndefined();
});

test("booleans", () => {
    expect(true).toEqual(true);
    expect(false).toEqual(false);

    expect(0).toBeFalsy();
    expect("").toBeFalsy();
    expect(false).toBeFalsy();
});

test("string", () => {
    expect("palabra").toMatch(/abra/);
});

test("arrays", () => {
    const numbers = [1, 2, 3, 4, 5];
    expect(numbers).toContain(3);
});

test("functions", () => {
    const data = ["ra", "fara"];
    expect(data).toContainEqual("fara");
});
