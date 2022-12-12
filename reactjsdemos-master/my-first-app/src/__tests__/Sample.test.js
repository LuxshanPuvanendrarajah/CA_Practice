describe(`A suite is just a function`, () => {
    let a;
    let b;

    it(`and so is a spec`, () => {
        a = true;

        expect(a).toBe(true);
    });

    test(`either test or it can be used`, () => {
        a = false;
        b = `Some string`;

        expect(b).toContain(`me`);
    });

    it(`there should only really be one expect call but more can be made`, () => {

        expect(a).toBeTruthy();
        expect(a).not.toBeFalsy();
    });
});