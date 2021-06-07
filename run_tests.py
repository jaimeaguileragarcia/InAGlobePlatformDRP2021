import pytest
from flask_script import Manager

from backend.main import app
from backend.database_config.database import DB

manager = Manager(app)


@manager.command
def test():
    """Runs the tests."""
    DB.drop_all()
    DB.create_all()
    raise SystemExit(pytest.main(["-s", "backend/tests"]))


if __name__ == "__main__":
    manager.run()
