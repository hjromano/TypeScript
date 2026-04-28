function handle(value: string | undefined | null) {
    if (!value) return;

    value.toUpperCase();
}

handle("hello");