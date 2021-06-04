import pytest

from backend.main import app

@pytest.fixture
def client():
    app.config['TESTING'] = True
    return app.test_client
